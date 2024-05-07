import team from '~/server/content/team';

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params

  const member = team.find((member) => member.slug === slug);
  return member
})
