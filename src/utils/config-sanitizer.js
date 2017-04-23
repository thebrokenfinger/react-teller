export default function sanitizer(config) {
  if (
    "position" in config &&
    !/^(top-right|top-left|bottom-left|bottom-right)$/.test(config.position)
  ) {
    delete config.position;
  } else {
    config.position = config.position.replace("-", "");
  }

  if ("type" in config && !/^(info|success|warning|error)$/.test(config.type)) {
    delete config.type;
  }

  return config;
}
