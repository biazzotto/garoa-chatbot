const anchises = [
  'CAADAQADRgAD7ZHbBS6ynzon48QBAg',
  'CAADAQADFQAD7ZHbBXN-aMYOGc0RAg',
  'CAADAQADVgAD7ZHbBcoAAebRoLOFqAI'
]

const fun = ({ msg, responseTypes }) => {
  const random = Math.floor(Math.random() * anchises.length)
  return [ {
    type: responseTypes.STICKER,
    content: anchises[ random ],
    options: {
      reply_to_message_id: msg.message_id
    }
  } ]
}

fun.regex = /anchises/ig
fun.reply = true

module.exports = fun
