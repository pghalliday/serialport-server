export function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}
