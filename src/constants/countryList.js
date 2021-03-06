class CountryList {
  constructor() {
    this.countries = this.countries.bind(this);
    this.orgArr = this.orgArr.bind(this);
  }

  orgArr = () => {
    let res = [
      ["Argentina", "A", "1.12", "60000"],
      ["Argentina", "B", "0.95", "5000<B<60000"],
      ["Argentina", "C", "0.77", "5000"],
      ["Austria", "A", "3.78", "<300000"],
      ["Austria", "B", "3.04", "100000<B<300000"],
      ["Austria", "C", "2.47", ">100000"],
      ["Bahrain", "A", "1.44", "<500000"],
      ["Bahrain", "B", "1.38", "100000<B<500000"],
      ["Bahrain", "C", "1.28", "<100000"],
      ["Bangladesh", "A", "0.91", "<60000"],
      ["Bangladesh", "C", "0.82", ">5000"],
      ["Bangladesh", "B", "0.79", "5000<B<60000"],
      ["Bolivia", "A", "0.59", "<60000"],
      ["Bolivia", "B", "0.55", "5000<B<60000"],
      ["Bolivia", "C", "0.44", ">5000"],
      ["Bulgaria", "A", "1.94", "<101000"],
      ["Bulgaria", "B", "1.62", "50000<B<101000"],
      ["Bulgaria", "C", "1.52", ">50000"],
      ["Cambodia", "A", "0.54", "<60000"],
      ["Cambodia", "B", "0.44", "5000<B<60000"],
      ["Cambodia", "C", "0.33", ">5000"],
      ["Chile", "A", "1.38", "<60000"],
      ["Chile", "B", "1.31", "5000<B<60000"],
      ["Chile", "C", "1.29", ">5000"],
      ["Czech republic", "A", "2.38", "<101000"],
      ["Czech republic", "B", "1.33", "50000<B<101000"],
      ["Czech republic", "C", "1.33", ">50000"],
      ["Cyprus", "A", "1.38", "<60000"],
      ["Cyprus", "B", "1.31", "5000<B<60000"],
      ["Cyprus", "C", "1.29", ">5000"],
      ["Dominican Republic", "A", "1.1", "<60000"],
      ["Dominican Republic", "B", "0.89", "5000<B<60000"],
      ["Dominican Republic", "C", "0.68", ">5000"],
      ["Ecuador", "A", "1.25", "<60000"],
      ["Ecuador", "B", "1.05", "5000<B<60000"],
      ["Ecuador", "C", "0.95", ">5000"],
      ["Egypt", "A", "1.13", "<500000"],
      ["Egypt", "B", "0.95", "100000<B<500000"],
      ["Egypt", "C", "0.69", "<100000"],
      ["Greece", "A", "1.38", "<60000"],
      ["Greece", "B", "1.31", "5000<B<60000"],
      ["Greece", "C", "1.29", ">5000"],
      ["Finland", "A", "3.26", "<50000"],
      ["Finland", "B", "3.18", "10000<B<50000"],
      ["Finland", "C", "2.76", ">10000"],
      ["Hong Kong", "A", "6.39", "<60000"],
      ["Hong Kong", "B", "4.56", "5000<B<60000"],
      ["Hong Kong", "C", "2.3", ">5000"],
      ["Hungary", "A", "1.72", "<101000"],
      ["Hungary", "B", "1.16", "50000<B<101000"],
      ["Hungary", "C", "1.09", ">50000"],
      ["Japan", "A", "6.39", "<60000"],
      ["Japan", "B", "4.56", "5000<B<60000"],
      ["Japan", "C", "2.3", ">5000"],
      ["Jordan", "A", "0.82", "<500000"],
      ["Jordan", "B", "0.76", "100000<B<500000"],
      ["Jordan", "C", "0.58", "<100000"],
      ["Korea", "A", "3.78", "<300000"],
      ["Korea", "B", "3.04", "100000<B<300000"],
      ["Korea", "C", "2.47", ">100000"],
      ["Kuwait", "A", "1.36", "<500000"],
      ["Kuwait", "B", "1.3", "100000<B<500000"],
      ["Kuwait", "C", "1.12", "<100000"],
      ["Laos", "A", "0.98", "<60000"],
      ["Laos", "B", "0.8", "5000<B<60000"],
      ["Laos", "C", "0.64", ">5000"],
      ["Malaysia", "A", "2.4", "<60000"],
      ["Malaysia", "B", "2.03", "5000<B<60000"],
      ["Malaysia", "C", "1.58", ">5000"],
      ["Myanmar", "A", "1.81", "<60000"],
      ["Myanmar", "B", "1", "5000<B<60000"],
      ["Myanmar", "C", "0.64", ">5000"],
      ["Norway", "A", "6.21", "<50000"],
      ["Norway", "B", "4.52", "10000<B<50000"],
      ["Norway", "C", "3.26", ">10000"],
      ["Oman", "A", "1.03", "<500000"],
      ["Oman", "B", "1", "100000<B<500000"],
      ["Oman", "C", "0.85", "<100000"],
      ["Pakistan", "A", "0.95", "<60000"],
      ["Pakistan", "B", "0.79", "5000<B<60000"],
      ["Pakistan", "C", "0.52", ">5000"],
      ["Panama", "A", "1.76", "<60000"],
      ["Panama", "B", "1.74", "5000<B<60000"],
      ["Panama", "C", "1.4", ">5000"],
      ["Paraguay", "A", "0.94", "<60000"],
      ["Paraguay", "B", "0.85", "5000<B<60000"],
      ["Paraguay", "C", "0.68", ">5000"],
      ["Peru", "A", "1.48", "<60000"],
      ["Peru", "B", "1.24", "5000<B<60000"],
      ["Peru", "C", "1.12", ">5000"],
      ["Philippines", "A", "0.93", "<60000"],
      ["Philippines", "B", "0.91", "5000<B<60000"],
      ["Philippines", "C", "0.71", ">5000"],
      ["Qatar", "A", "1.67", "<500000"],
      ["Qatar", "B", "1.42", "100000<B<500000"],
      ["Qatar", "C", "1.35", "<100000"],
      ["Romania", "A", "2.16", "<101000"],
      ["Romania", "B", "1.78", "50000<B<101000"],
      ["Romania", "C", "1.76", ">50000"],
      ["Saudi Arabia", "A", "1.32", "<500000"],
      ["Saudi Arabia", "B", "1.16", "100000<B<500000"],
      ["Saudi Arabia", "C", "1.02", "<100000"],
      ["Singapore", "A", "5.71", "<60000"],
      ["Singapore", "B", "3.69", "5000<B<60000"],
      ["Singapore", "C", "2.98", ">5000"],
      ["Sweden", "A", "7.49", "<50000"],
      ["Sweden", "B", "5.02", "10000<B<50000"],
      ["Sweden", "C", "1.23", ">10000"],
      ["Taiwan", "A", "3.7", "<60000"],
      ["Taiwan", "B", "3.47", "5000<B<60000"],
      ["Taiwan", "C", "3.29", ">5000"],
      ["Thailand", "A", "1.89", "<60000"],
      ["Thailand", "B", "1.58", "5000<B<60000"],
      ["Thailand", "C", "1.4", ">5000"],
      ["UAE", "A", "2.74", "<500000"],
      ["UAE", "B", "2.02", "100000<B<500000"],
      ["UAE", "C", "1.81", "<100000"],
      ["Uruguay", "A", "0.92", "<60000"],
      ["Uruguay", "B", "0.87", "5000<B<60000"],
      ["Uruguay", "C", "0.86", ">5000"],
      ["Venezuela", "A", "1.38", "<60000"],
      ["Venezuela", "B", "1.31", "5000<B<60000"],
      ["Venezuela", "C", "1.29", ">5000"],
    ];
    return res;
  };

  countries = () => {
    let orgArr = this.orgArr();
    let names = [];
    orgArr.map((obj) => names.push(obj[0]));
    let uniq = [...new Set(names)];
    let res = [];
    uniq.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );

    return res;
  };

  cpm = (country, followers) => {
    let orgArr = this.orgArr();
    let names = [];
    orgArr.map((obj) => names.push(obj[0]));
    let uniq = [...new Set(names)];
    let temp = [];
    let res = {};
    uniq.map((country) => temp.push(orgArr.filter((i) => i[0] === country)));
    // eslint-disable-next-line array-callback-return
    temp.map((arr) => {
      res[arr[0][0]] = {
        A: arr[0][2],
        B: arr[1][2],
        C: arr[2][2],
      };
    });
    //    console.log("temp", temp)

        //console.log("res", res)
    let prominence = this.prominence(country, followers);
    return res[country][prominence];
  };

  prominence = (country, followers) => {
    let orgArr = this.orgArr();
    let names = [];
    orgArr.map((obj) => names.push(obj[0]));
    let uniq = [...new Set(names)];
    let temp = [];
    let res = {};
    uniq.map((country) => temp.push(orgArr.filter((i) => i[0] === country)));
    // eslint-disable-next-line array-callback-return
    temp.map((arr) => {
      res[arr[0][0]] = {
        max: arr[0][3].replace(/\D/g,''),
        min: arr[2][3].replace(/\D/g,''),
      };
    });
       console.log("res", res)
    let prominence = undefined;
    if (followers >= parseInt(res[country]["max"])) {
      prominence = "A";
    } else if (followers <= parseInt(res[country]["min"])) {
      prominence = "C";
    } else prominence = "B";
    //    console.log("followers", followers)

    return prominence;
  };
}
export default CountryList;
