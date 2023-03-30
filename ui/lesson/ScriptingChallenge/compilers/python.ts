function compile(input, program) {
  return `
import js
import json
import time
import string
import random
import pyodide
import builtins as __builtin__
from random import randrange

def on_message(event):
  data = json.loads(event.data)
  if data['action'] == 'result':
    VM.response(data['requestId'], data['payload'])

proxy = pyodide.create_proxy(on_message)

js.addEventListener('message', proxy)


class VM:
  request_id = 0
  callbacks = {}

  def random_between(min, max):
    return randrange(min, max + 1)

  def random_string(length = 64):
    return ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(length))

  def send(action, payload=None):
    js.postMessage(json.dumps({ "action": action,"payload": payload}))

  def request(action, payload, callback):
    VM.request_id += 1

    VM.callbacks[VM.request_id] = callback

    js.postMessage(
      json.dumps({
        "action":action,
        "payload":payload,
        "requestId":VM.request_id
      })
    )

  def response(request_id, payload):
    if request_id not in VM.callbacks:
      return print("Callback error")

    callback = VM.callbacks[request_id]
    callback(payload)

  def validate(output, callback):
    VM.request('validate', output, callback)

  def result(r):
    VM.send('result', r)

  def close():
    js.removeEventListener('message', proxy)

def print(*args, **kwargs):
  # __builtin__.print(*args, **kwargs)
  js.postMessage(json.dumps({"action":"log","payload":args}))

def run():
${indent(input.trim(), 2)}
  # Overrides
  class sha256:
    def __init__(self, input):
      self.input = input

    def hexdigest(self):
      return VM.random_string()
${indent(program.trim(), 2)}

run()
`.trim()
}

function indent(code, indentation = 0) {
  return code
    .split('\n')
    .filter((l) => l)
    .map((l) => ' '.repeat(indentation) + l)
    .join('\n')
}

const python = {
  compile,
}

export default python
