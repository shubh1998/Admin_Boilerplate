import { DEMO_NAMESPACE } from 'socket-resources/namespaces/index'
import { DEMO_EVENT } from '../event-constants/demo/index'
import createSocketConnection from '../socket-connection/index'
import config from 'config/app.config'

const demoSocketInstance = createSocketConnection(`${config.SOCKET_URL}${DEMO_NAMESPACE}`)

const useDemoSocketNameSpace = () => {
  const listenDemoEvent = (cb) => {
    if (demoSocketInstance && cb) {
      demoSocketInstance?.on(DEMO_EVENT, cb)
      return () => {
        demoSocketInstance.off(DEMO_EVENT, cb)
      }
    }
  }

  return {
    listenDemoEvent
  }
}

export default useDemoSocketNameSpace
