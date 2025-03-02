/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    __lc: any
    LiveChatWidget: any
  }
}
const CSKH = () => {
  const addLiveChatScript = () => {
    window.__lc = window.__lc || {}
    window.__lc.license = 19059244
      ; (function (n: any, t: Document) {
        function i(args: any[]) {
          return e._h ? e._h.apply(null, args) : e._q.push(args)
        }

        interface LiveChatWidgetType {
          _q: any[]
          _h: any
          _v: string
          on: (...args: any[]) => void
          once: (...args: any[]) => void
          off: (...args: any[]) => void
          get: (...args: any[]) => void
          call: (...args: any[]) => void
          init: () => void
        }

        const e: LiveChatWidgetType = {
          _q: [],
          _h: null,
          _v: '2.0',
          on: function (...args: any[]) {
            i(['on', args])
          },
          once: function (...args: any[]) {
            i(['once', args])
          },
          off: function (...args: any[]) {
            i(['off', args])
          },
          get: function (...args: any[]) {
            if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.")
            return i(['get', args])
          },
          call: function (...args: any[]) {
            i(['call', args])
          },
          init: function () {
            const script = t.createElement('script')
            script.async = true
            script.type = 'text/javascript'
            script.src = 'https://cdn.livechatinc.com/tracking.js'
            t.head.appendChild(script)
          }
        }

        if (!n.__lc.asyncInit) e.init()
        n.LiveChatWidget = n.LiveChatWidget || e
      })(window, document)

    window.LiveChatWidget.call('maximize')
  }
  return (
    <>
      <button
        className=' p-2.5 rounded-full border bg-blue-600 text-white animate-none fixed bottom-8 right-10 z-50'
        onClick={addLiveChatScript}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
          />
        </svg>
      </button>
    </>
  )
}

export default CSKH
