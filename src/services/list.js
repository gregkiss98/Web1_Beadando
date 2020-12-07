export function getList() {
    return fetch('https://www.cheapshark.com/api/1.0/deals')
      .then(data => data.json())
  }
  