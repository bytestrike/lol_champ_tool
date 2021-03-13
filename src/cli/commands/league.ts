import { CommandModule } from 'yargs'
import { RawOptions, refineOptions } from '..'

interface LeagueOptions {
  mode: string
  champ: string
}

export const league:CommandModule<RawOptions, LeagueOptions & RawOptions> = {
  command: 'champ <champ> [mode]',
  aliases: ['c'],
  builder: builder => builder
    .positional('mode', {
      type: 'string'
    })
    .positional('champ', {
      type: 'string'
    }),
  handler: async args => {
    const refined = await refineOptions(args)
    const mode = args.mode?.toLowerCase()
    const champ = args.champ?.toLowerCase()

    if (mode === 'aram' || mode === 'a') {
      return refined.app.browserInterface
        .open(`https://u.gg/lol/champions/${mode}/${champ}-${mode}`)
    }

    return refined.app.browserInterface
      .open(`https://u.gg/lol/champions/${champ}/build`)
  }
}
