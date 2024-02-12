import packageJSON from '../../package.json';

export function getVersion(): string {
  return packageJSON.version;
}
