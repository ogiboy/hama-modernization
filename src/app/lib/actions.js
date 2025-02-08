'use server'

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function handleSubmit(prevState, formData) {
  const message = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  if (
    isInvalidText(message.name) ||
    isInvalidText(message.email) ||
    isInvalidText(message.message)
  ) {
    return {
      message: 'Invalid Input',
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    message: `İsim: ${message.name}, Mesaj: ${message.message}`,
  }
}
