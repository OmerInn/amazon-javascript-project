export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, { 
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {

  if (!deliveryOptionId) {
    console.error("Invalid deliveryOptionId");
    return null;
  }

  const deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId);

  if (!deliveryOption) {
    console.error("Delivery option not found");
    return null;
  }

  return deliveryOption;

}
