import { logger } from 'src/lib/logger'

export const handler = async (event, context) => {
  logger.info('Invoked helloWorld function')

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      data: 'helloWorld function',
    }),
  }
}
