![alt text](https://github.com/aissam-ahbar/angular-components-lifecycles/blob/main/src/assets/hooks.png?raw=true)

# Angular Lifecyles with Heroe Create & Destroy 

This example shows all Hooks in one components ! Amazing, right !!!

# Hook order : 
## 1) ngOnChanges()	
Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.

## 2) ngOnInit()	- Most common 
Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties. See details in Initializing a component or directive in this document.	

## 3) ngDoCheck()	
Detect and act upon changes that Angular can't or won't detect on its own. See details and example in Defining custom change detection in this document.	

## 4) ngAfterContentInit()	
Respond after Angular projects external content into the component's view, or into the view that a directive is in.

## 5) ngAfterContentChecked()	
Respond after Angular checks the content projected into the directive or component.

## 6) ngAfterViewInit() - Most common 
Respond after Angular initializes the component's views and child views, or the view that contains the directive.

## 7) ngAfterViewChecked()	
Respond after Angular checks the component's views and child views, or the view that contains the directive.	

## 8) ngOnDestroy() - Most common 	
Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks. See details in Cleaning up on instance destruction in this document.	
