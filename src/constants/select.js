class Select {
  constructor() {
    this.categories = this.categories.bind(this);
    this.platforms = this.platforms.bind(this);
    this.prominences = this.prominences.bind(this);
    this.contentValues = this.contentValues.bind(this);
  }

  categories = () => {
    let names = [
      "Lifestyle",
      "Celebrities",
      "Foodies",
      "PMEBS",
      "Young Families",
      "Campus",
      "Technology",
      "Eco Warriors",
    ];

    let res = [];
    names.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  platforms = () => {
    let names = [
      "Facebook",
      "Instagram_Post",
      "Instagram_Stories",
      "Instagram_TV",
      "Snapchat",
      "TikTok",
      "Twitter",
      "Youtube",
    ];

    let res = [];
    names.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  prominences = () => {
    let names = [
      "A",
      "B",
      "C",
    ];

    let res = [];
    names.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  contentValues = () => {
    let list = [
      {label:"Low",value:50},
      {label:"Medium low",value:300},
      {label:"Medium high",value:600},
      {label:"High",value:1000},
    ];

    let res = [];
    list.map((item) =>
      res.push({
        key: item.label,
        value: item.value,
        text: item.label,
      })
    );
    return res;
  };
}
export default Select;
