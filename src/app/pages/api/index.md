# {{ NgDocPage.title }}

## Inputs

| name                  | data type | default | description                                                                                                                                              |
| --------------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`                | _Number_  | 200     | The dimension of shape                                                                                                                                   |
| [`type`](#categories) | _String_  | random  | The category of shapes, if left empty it will randomly select a category.                                                                                |
| `noise`               | _Boolean_ | true    | Whether to add noise to the shape or not.                                                                                                                |
| `index`               | _Number_  | random  | The index of shape within the shape [category](#categories), it would randomly select a shape from the category if type prop given. index starts from 0. |
| `random`              | _Boolean_ | false   | If set true it will select a random component                                                                                                            |

> **Note**
> Index starts from number 0, so if you want to retrieve the first shape of any category, you would use the index number 0.

### Categories

There are a total of **115** shapes available in Coolshapes under the following categories.

| name        | count |
| ----------- | ----- |
| `star`      | 13    |
| `triangle`  | 14    |
| `moon`      | 15    |
| `polygon`   | 8     |
| `flower`    | 16    |
| `rectangle` | 9     |
| `ellipse`   | 12    |
| `wheel`     | 7     |
| `misc`      | 11    |
| `number`    | 10    |

> **Note**
> While passing the category name in the component, the name will be in lower case.
