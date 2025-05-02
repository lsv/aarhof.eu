// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async () => {
  return await fetch(`https://raw.githubusercontent.com/lsv/aarhof.eu/master/wishes.json`)
    .then(res => res)
})
