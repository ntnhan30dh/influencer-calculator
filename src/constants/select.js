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
    let names = [
      "Low",
      "Medium low",
      "Medium high",
      "High"
      
      
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
}
export default Select;
