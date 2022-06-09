declare module '*.jpg'
declare module '*.svg'
declare module '*.svg?url'
declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
