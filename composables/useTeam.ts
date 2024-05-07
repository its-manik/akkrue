export function useTeam() {
  const getTeam = async () => {
    // console.log('getTeam')
    const { data, error } = await useFetch(
      '/api/team'
    );

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: 'Could not fetch team data'
      })
    }
    // console.log('Data', data)
    return data;
  }

  const getMemberBySlug = async (slug) => {
    const { data, error } = await useFetch(
      '/api/team/' + slug
    );

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: 'Could not fetch team member data'
      })
    }
    return data;
  }

  return {
    getTeam,
    getMemberBySlug
  }
}