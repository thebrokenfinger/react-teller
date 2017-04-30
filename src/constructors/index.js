import templateParser from "../utils/template-parser";
import configSanitizer from "../utils/config-sanitizer";
import { mount } from "../utils/renderer";

const Notification = (rawTemplate, ...templateKeys) => {
  return function(...dataValues) {
    // check for invocation config
    const arg = dataValues[0];
    let isConfigProvided = false;

    if (
      typeof arg === "object" &&
      ("position" in arg ||
        "onClick" in arg ||
        "type" in arg ||
        "duration" in arg ||
        "animation" in arg)
    ) {
      isConfigProvided = true;
      dataValues = dataValues.slice(1);
    }

    // parse the notification template
    let { config, ...other } = templateParser(
      rawTemplate,
      templateKeys,
      dataValues
    );

    // override default config with new, if provided
    if (isConfigProvided) {
      config = Object.assign({}, config, configSanitizer(arg));
    }

    // mount notification
    mount({ config, ...other });
  };
};

export default Notification;
