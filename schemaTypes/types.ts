export type Question = {
  name: string
  status: string
  title: string
  text: string
  answers: Array<Answer>
}

export type Answer = {
  status: string
  title: string
  tags: Array<string>
  link: Question | any
}
