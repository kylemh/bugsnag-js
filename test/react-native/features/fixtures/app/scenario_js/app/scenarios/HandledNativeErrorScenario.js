import Scenario from './Scenario'
import { NativeModules } from 'react-native'

export class HandledNativeErrorScenario extends Scenario {
  run() {
    NativeModules.BugsnagTestInterface.runScenario('HandledNativeErrorScenario')
  }
}
