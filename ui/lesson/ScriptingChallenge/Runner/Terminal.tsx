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
                    font-size: 12px;
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

                  .output .success:before {
                    content: 'x: "';
                    display: block;
                    visibility: hidden;
                  }

                  .output .success:after {
                    content: '", y: "';
                    display: block;
                    visibility: hidden;
                  }

                  .output .success::before {
                    content: "";
                    position: absolute; 
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(transparent, transparent calc(50% - 0.6em), white calc(50% - 0.6em), white calc(50% + 0.6em), transparent calc(50% + 0.6em));
                    pointer-events: none; 
                    z-index: 1;
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
