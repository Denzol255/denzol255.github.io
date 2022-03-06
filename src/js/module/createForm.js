module.exports = function createForm(formClass, parentClass) {
  const wrapper = document.querySelector(parentClass);
  if (!document.querySelector(formClass)) {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `	<div class="auto__form form-owner">
					<form action="#" class="form-owner__form">
						<div class="form-owner__item">
							<label for="name-input" class="form-owner__label">
								Name:
							</label>
							<input type="text" id="name-input" placeholder="Change name..." class="form-owner__input">
						</div>
						<div class="form-owner__item">
							<label for="owner-input" class="form-owner__label">
								Owner:
							</label>
							<input type="text" id="owner-input" placeholder="Change owner..." class="form-owner__input">
						</div>
						<div class="form-owner__item">
							<label for="email-input" class="form-owner__label">
								Email:
							</label>
							<input type="email" id="email-input" placeholder="Change email..." class="form-owner__input">
						</div>
						<button type="button" class="form-owner__button">Submit</button>
					</form>
				</div>`
    );
  }
};
