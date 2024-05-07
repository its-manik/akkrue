export function useFaq() {
  const getFaq = async () => {
    // console.log('getFaq')
    const { data, error } = await useFetch(
      '/api/faq'
    );

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: 'Could not fetch faq data'
      })
    }
    // console.log('Data', data)
    return data;
  }

  return {
    getFaq
  }
}