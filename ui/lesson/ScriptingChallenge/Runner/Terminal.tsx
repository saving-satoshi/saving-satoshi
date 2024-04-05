import React from 'react'
import clsx from 'clsx'
import Convert from 'ansi-to-html'

function Terminal({ className }: { className?: string }, ref) {
  return (
    <iframe
      // @ts-ignore
      ref={ref}
      className={clsx(
        className,
        'h-full w-full border-t border-white border-opacity-30 bg-black bg-opacity-20'
      )}
      src={
        'data:text/html,' +
        encodeURIComponent(
          `<style>
                  body {
                    padding: 16px;
                    margin:0;
                  }
                  .output {
                    font-family: monospace;
                    color: white;
                  }
                  div.output > div > span {
                      font-family: monospace;
                      color: white !important;
                      font-size: 12px;
                      opacity: 0.75;
                  }
                  .output .error {
                    color: white;
                  }
                  .success {
                    color: white;
                  }
                  .output .success:nth-child(3) {
                    color: white;
                    font-size: 18px;
                    font-weight: 700;
                    margin-top: 15px;
                  }
                  .log {
                    word-break: break-all;
                    color: white;
                  }
                  .output .log:first-child {
                    color:white;
                    font-size: 18px;
                    font-weight: 700;
                  }
                  .success-background {
                    background-color: #28B12340;
                  }
                  .error-background {
                    background-color: #D01C1640;
                  }
                </style>
                <div class="output"></div>
                <script>
                  const output = document.querySelector('.output')
                  window.addEventListener('message', e => {
                    const {action,payload} =JSON.parse(e.data)
                    switch(action) {
                      case 'print': {
                        document.body.classList.remove("error-background")
                        document.body.classList.remove("success-background")
                        output.innerHTML += "<div class='log'>"+payload+"</div>"
                        output.parentElement.scrollTop = output.scrollHeight
                        break
                      }
                      case 'error': {
                        document.body.classList.add("error-background")
                        output.innerHTML += "<div class='error'>"+payload+"</div>"
                        output.parentElement.scrollTop = output.scrollHeight
                        break
                      }
                      case 'success': {
                        document.body.classList.add("success-background")
                        output.innerHTML += "<div class='success'>"+payload+"</div>"
                        output.parentElement.scrollTop = output.scrollHeight
                        break
                      }
                      case 'clear': {
                        output.innerHTML = ''
                        break
                      }
                    }
                  })

                  const send = (action,payload) => window.parent.postMessage(JSON.stringify({action,payload}), '*')
                  send('ready')
                </script>`
        )
      }
    />
  )
}

export default React.forwardRef(Terminal)
