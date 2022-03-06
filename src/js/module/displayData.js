module.exports = function displayData(data) {
  const autoWrapper = document.querySelector(".auto__wrapper");
  const title = data.Item.Title.toLowerCase();
  const description = data.Item.Description;
  const features = data.Item.KeyValues;

  const displayFeatures = (obj) => {
    let featuresStr = "";
    for (const key in obj) {
      let feature = `
      <li class="features__card">
        <span class="features__name">${key}</span>
        <span>-</span>
        <span class="features__value">${obj[key]}</span>
      </li>`;
      featuresStr += feature;
    }
    return featuresStr;
  };

  autoWrapper.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="auto__image">
    <img src="../img/2022-kia-sportage-front-quarter.jpg" alt="kia sportage">
  </div>
  <div class="auto__info">
    <h1 class="auto__title">${title}</h1>
    <p class="auto__description">${description}</p>
  </div>
  <div class="auto__features features">
    <h2 class="features__title">Key features</h2>
    <ul class="features__cards">
      ${displayFeatures(features)}
    </ul>
  </div>
  <div class="auto__owner owner">
    <div className="owner__main">
      <h2 class="owner__title">Owner</h2>
      <div class="owner__info">
        <div class="owner__name">
          <span class="owner__text">Name:</span>
          <span class="owner__data owner__data_name">${data.Garage.Name}</span>
        </div>
        <div class="owner__owner">
          <span class="owner__text">Owner:</span>
          <span class="owner__data owner__data_owner">
            ${data.Garage.Owner}
          </span>
        </div>
        <div className="owner__email">
          <span class="owner__text">Email:</span>
          <a href="mailto:${
            data.Garage.Email
          }" class="owner__data owner__data_email">
            ${data.Garage.Email}
          </a>
        </div>
      </div>
    </div>
    <button class="owner__edit">Edit</button>
  </div>
  `
  );
};
