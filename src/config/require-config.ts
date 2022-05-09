export function requireConfig<T extends string> (configName: string): T {
  const config = process.env[configName]
  if (config === undefined) {
    throw new Error(`missing config: ${configName}`)
  }

  return config as T
}
