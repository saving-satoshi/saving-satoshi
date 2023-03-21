const py_sdk = `
import js
import json
import pyodide
import time

def vm_log(data):
  js.postMessage(json.dumps({"action":"log","payload":data}))
`

export default py_sdk
