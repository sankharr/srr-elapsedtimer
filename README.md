<p align="center">
  <h1 align="center">srr-elapsedtimer</h1>
</p>

<p>An angular library which helps you to create a elapsed timer easily</p>

## Table of contents

- [Browser Support](#browser-support)
- [Features](#features)
- [Demo](#stackblitz-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Useful Tips](#useful-tips)
- [Versioning](#versioning)
- [Creator](#creator)
    - [Sankha Rathnayake](#sankha-rathnayake)
- [License](#license)

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                                                                                                                                      | Latest ✔                                                                                                                                                                                                          | IE11, Edge ✔                                                                                                                                                                                                    | Latest ✔                                                                                                                                                                                                                  | Latest ✔                                                                                                                                                                                                  |

## Features

- **Angular 10** Support
- Customize the font, font colour and font size of the timer
- Get the current time of the timer as full time string, hours, minutes or seconds 
- Start, Pause, Resume, and Reset the timer
- Start the timer with a delay
- Set the timer to change it's colour after a certain time

## Demo

[Working Demo]()

### StackBlitz Demo

- [Normal Usage](https://stackblitz.com/edit/angular-kruvnm)

## Installation

`srr-elapsedtimer` is available via [npm]()

Using npm:

```bash
$ npm install srr-elapsedtimer --save
```

## Usage

Import `ElapsedtimerModule` in in the root module(`AppModule`):
Also Add `CUSTOM_ELEMENTS_SCHEMA` to `@angular/core` import statement and also to **schemas** array in `@NgModule`

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { ElapsedtimerModule } from "srr-elapsedtimer";

@NgModule({
  imports: [
    // ...
    ElapsedtimerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Add `ElapsedtimerService` service wherever you want to use the `srr-elapsedtimer`.

```typescript
import { ElapsedtimerService } from "srr-elapsedtimer";

class AppComponent implements OnInit {
  constructor(private timer: ElapsedtimerService) {}

  ngOnInit() {
    
     this.timer.startTimer(); //This is simple example on how we can use a function

  }
}
```

Now use in your template

```html
<srr-elapsedtimer></srr-elapsedtimer>
```

See [Demo](#demo)

## Methods

- `ElapsedtimerService.startTimer()` Start the timer
- `ElapsedtimerService.pauseTimer()` Pause the timer
- `ElapsedtimerService.resumeTimer()` Resume the timer
- `ElapsedtimerService.delayStart(seconds:number)` Start the timer with a delay
- `ElapsedtimerService.setTimerExceedColourChange(exceedColour: string, hour: number, minutes: number, seconds: number)` When the timer exceeds a certain time, the colour of the timer will get changed
- `ElapsedtimerService.resetTimer()` Reset the timer
- `ElapsedtimerService.setTimerSettings(fontName: string,fontColour: string,fontSize: string)` Set the font, font colour and the font size of the timer

## Useful Tips

- Make sure you've added `CUSTOM_ELEMENTS_SCHEMA` as your schema in your main module. Refer [Usage](#usage)

## Versioning

srr-elapsedtimer will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Creator

#### [Sankha Rathnayake](https://www.linkedin.com/in/sankha-rathnayake/)

- [@GitHub](https://github.com/sankharr)

### License

srr-elapsedtimer is [MIT licensed](./LICENSE).
