const errors = {
  'Auth.form.error.email.taken': 'Este e-mail já está em uso.',
  'Auth.form.error.code.provide': 'O link de recuperação não é válido.',
  'Auth.form.error.user.not-exist':
    'Não existe nenhum cadastro para este email.'
}

export function getFormErrorMessageById(id: string) {
  return errors[id as keyof typeof errors] || 'Erro.'
}
