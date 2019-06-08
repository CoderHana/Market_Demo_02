// Simple React Native specific changes

import '../I18n/I18n'
import {I18nManager} from "react-native";

I18nManager.allowRTL(true)
I18nManager.forceRTL(true)

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true
}
