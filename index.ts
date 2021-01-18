import chalk = require('chalk')
import dateFormat = require('dateformat')
import emoji = require('node-emoji')

class LogTask {
  constructor(readonly name: string) {}

  logStep(emoji: string, step: string, description: string ) {
    console.log(`[${dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss')}] - ${emoji} ${this.name} ${step} ${description}`)
  }
}

const logTask = new LogTask('fetchUsers')

logTask.logStep(emoji.get('wrench'), 'START', 'preparing fetch users request url')
logTask.logStep(emoji.get('rocket'), 'EXECUTE', chalk.blue('fetching users from your url'))
logTask.logStep(emoji.get('white_check_mark'), 'END', chalk.green(`returned ${Math.floor(Math.random() * 100)} users`))
logTask.logStep(emoji.get('x'), 'END', chalk.red(`an error occurred while fetching the users. Error: some error`))
