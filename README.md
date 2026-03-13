
These components add First Australians and/or Content Advice indicators to records:
<img width="800" height="174" alt="screenshot-nde-customisations" src="https://github.com/user-attachments/assets/d03e1c88-4b05-41e4-89fd-b218b8b45d1c" />
<p>FirstAustraliansIndication could be adapted for other purposes where an indicator should be displayed based on specific subject terms in the record.
ContentAdviceIndication could be adapted for other purposes where an indicator should be displayed based on use of local display fields.</p><p>Originality created for Primo VE in 2024, see https://github.com/BondLibrary/cultural-sensitivity-alma-primo for details on using local display fields to create a Content Advice note.</p>

Map the custom components to the relevent nde selectors in the custom1-module e.g.:
```
import { FirstAustraliansIndicationComponent } from '../first-australians-indication/first-australians-indication.component';
import { ContentAdviceIndicationComponent } from '../content-advice-indication/content-advice-indication.component';

// Define the map
export const selectorComponentMap = new Map<string, any>([

['nde-record-indications-top',FirstAustraliansIndicationComponent],
['nde-record-indications-bottom',ContentAdviceIndicationComponent],

]);
```

