export const useGtm = () => {
  const gtmIdentify = (userId: string) => {
    const gtmDataLayer = (window as any).dataLayer || []
    gtmDataLayer.push({
      event: 'userID',
      userID: userId
    })
    // console.log('gtmIdentify', {gtmDataLayer})
  }

  const gtmEvent = (payload: any) => {
    const gtmDataLayer = (window as any).dataLayer || []
    gtmDataLayer.push(payload)
    // console.log('gtmEvent', {gtmDataLayer})
  }

  return {
    gtmIdentify,
    gtmEvent
  }
}
