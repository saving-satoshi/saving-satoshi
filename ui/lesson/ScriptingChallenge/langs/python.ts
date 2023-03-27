function compile(input, program) {
  return `import js
import json
import string
import random
import pyodide
import collections
import builtins as __builtin__
from random import randrange

class VM:
    request_id = 0
    callbacks = None

    def __init__(self):
        VM.callbacks = collections.defaultdict(set)

    def validate(answer):
        print(answer)

    def random_between(min, max):
        return randrange(min, max + 1)

    def random_string(length = 64):
        return ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(length))

    def send(action, payload=None):
        js.postMessage(json.dumps({ "action": action,"payload": payload}))

    def request(action, payload, callback):
        VM.request_id += 1

        print(action, payload, callback)
        # VM.callbacks[VM.request_id].add(callback)

        js.postMessage(
          json.dumps({
            "action":action,
            "payload":payload,
            "requestId":VM.request_id
          })
        )

def print(*args, **kwargs):
    # __builtin__.print(*args, **kwargs)
    js.postMessage(json.dumps({"action":"log","payload":args}))

${input}
${program}
`
}

const python = {
  compile,
}

export default python
