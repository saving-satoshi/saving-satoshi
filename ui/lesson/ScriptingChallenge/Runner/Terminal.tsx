import React from 'react'
import clsx from 'clsx'
import Convert from 'ansi-to-html'

function Terminal(
  {
    className,
    successStyle,
  }: {
    className?: string
    successStyle?: {
      backgroundColor?: string
      fontSize?: string
    }
  },
  ref
) {
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
                    background-color: ${
                      successStyle?.backgroundColor || 'default'
                    }; 
                    }
                  .output {
                    font-family: monospace;
                    color: black;
                   
                          }

                  div.output > div > span {
                      font-family: monospace;
                      color: white !important;
                      font-size: 12px;
                      opacity: 0.75;
                  }

                  .output .error {
                    color: #C40008;
                  }

                  .output .success {
                    color: #00B400;
                     }

                  .output .log {
                    color:white;
                  }
                </style>
                <div class="output"></div>
                <script>
                  const output = document.querySelector('.output')
                  window.addEventListener('message', e => {
                    const {action,payload} =JSON.parse(e.data)
                    console.log("Received in iframe:", e.data);
                    switch(action) {
                      case 'print': {
                        output.innerHTML += "<div class='log'>"+payload+"</div>"
                        output.parentElement.scrollTop = output.scrollHeight
                        break
                      }
                      case 'error': {
                        output.innerHTML += "<div class='error'>Error: "+payload+"</div>"
                        output.parentElement.scrollTop = output.scrollHeight
                        break
                      }
                      case 'success': {

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
