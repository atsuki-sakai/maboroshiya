// helper funnction directory.

function truncate(str: string, len: number): string {
  return str.length <= len ? str : str.substring(0, len) + '....'
}

export default truncate