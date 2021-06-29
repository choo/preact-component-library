type Params = {[s: string]: string | number | undefined};

const ajax = async (url: string, params: Params) => {
  const _isNullParam = v => (v == null || v === '');
  const urlParams = Object.keys(params).filter(
      key => !_isNullParam(params[key])).map(
      key => (`${key}=${params[key].toString()}`
  ));
  try {
    const res = await fetch(`${url}?${urlParams.join("&")}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
  return null;
};

export {ajax}
