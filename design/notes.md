# Notes

## Examples

```js
"desserts": {
  "title": "Desserts",
  "is-category": true,
  "items": [
    { "title": "Coconut Cake", "price": "5.00" },
    { "title": "Peanut Butter Pie", "price": "5.00" },
    { "title": "Cocoa Panna Cotta, Fruit", "price": "5.00" },
    { "title": "Foie Gras Pound Cake, Caramel Ice Cream", "price": "5.00" },
    {
      "title": "Ice Cream",
      "items": [
        { "title": "Chocolate", "price": "2.59" },
        { "title": "Vanilla", "price": "2.29" },
        { "title": "Strawberry", "price": "2.99" }
      ]
    }
  ]
}
```

## Output

```html
<h3 class="retail-menu-category">Deserts</h3>
<ul class="retail-menu-items">
  <li class="retail-menu-item">
    <span class="retail-menu-item__title">Coconut Cake</span>
    <span class="retail-menu-item__price">5.00</span>
  </li>
  <li class="retail-menu-item">
    <span class="retail-menu-item__title">Peanut Butter Pie</span>
    <span class="retail-menu-item__price">5.00</span>
  </li>
  <li class="retail-menu-item">
    <span class="retail-menu-item__title">Cocoa Panna Cotta, Fruit</span>
    <span class="retail-menu-item__price">5.00</span>
  </li>
  <li class="retail-menu-item">
    <span class="retail-menu-item__title">Foie Gras Pound Cake, Caramel Ice Cream</span>
    <span class="retail-menu-item__price">5.00</span>
  </li>
  <li class="retail-menu-item">
    <span class="retail-menu-item__title">Ice Cream</span>
    <ul class="retail-menu-items">
      <li class="retail-menu-item">
        <span class="retail-menu-item__title">Chocolate</span>
        <span class="retail-menu-item__price">2.59</span>
      </li>
      <li class="retail-menu-item">
        <span class="retail-menu-item__title">Vanilla</span>
        <span class="retail-menu-item__price">2.29</span>
      </li>
      <li class="retail-menu-item">
        <span class="retail-menu-item__title">Strawberry</span>
        <span class="retail-menu-item__price">2.99</span>
      </li>
    </ul>
  </li>
</ul>
```

## Outline

- Category
  - Description
  - Items
    - Item
      - Description / Ingredients
      - Price
      - Notes / Warnings / Allergens

### Properties

- Category
- Description
- Items
- Item
- Description / Ingredients
- Price

The price of the item, formatted in a string.

- Important Notes / Warnings / Allergens

Creates an anchor link to the footer notes for quick access with included symbol, (*,#,gf,v)