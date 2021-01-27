# My Ngovo Challenge
 1. The Folder `client` contains the script for the first question
 2. The folder `server` contains the app for the second part.

 3. The answers to the question are as follows:
  
     1. 
     ```  
      getIdea(): string {
        let idea: any = false;
        const variable: string = !!idea ? ‘Amazing!’ : (idea === null ? ‘So awesome’ :
        ‘Not so good’);
        return variable;
        }  
     ```

      - The above is a piece of typescript code defines a function `getIdea` which returns a string as the result. 
      - The return variable resolves a with a value depending on the following  conditions: 
      - if the value of `idea` is type `null` it resolves with `So Awesome` 
      - if the value of `idea` is any falsy value it resolves with 'Not so good'
      - if the value if `idea` is any truthy value it resolves with `'Amazing'`


      2.
      ```
      function generateOutput($length) {
          $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          $characters_length = strlen($characters);
          $output = '';
          for($i = 0; $i < $length; $i++) {
          $output .= $characters[rand(0, $characters_length - 1)];
          }
          // Check in a database (Laravel-specific code)
          $found = Payment::where('output', '=', $output)->get()->toArray();
          if(isset($found[0]))
          return $this->generateOutput(rand(3, 9));
          else
          return $output;
      ```

      - This PHP/Laravel code generates a random string of characters of a length defined by an incoming parameter `$length`
      - It then performs a database query with the string as a parameter on the Payments Model.
      - If it finds a record it recursively calls itself again with a random value else it exits and returns the random string of characters as a result.

      3.
       ```
      import { FCM } from 'cordova-plugin-fcm';
        subscription: any;
        private subscribe() {
        if(this.subscription)
        this.unsubscribe();
        this.subscription = FCM.onNotification().subscribe((data) => {
        if(data.wasTapped) {
        console.log(data)

        } else {
        if(!!data.payload)
        console.log(data.payload);
        }
        })
        }
        unsubscribe() {
        if(!!this.subscription)
        this.subscription.unsubscribe();
        }
      ```

    - This code defines two methods for subscribing and unsubscribing to a notification service. 
    - When the subscribe method is called, it first calls unsubscribe method which terminates the original subscription. Then it creates a new subscription instance and logs any data that was tapped. If there was a data payload, it is logged to the console. 
    - The unsubscribe method terminates the subscription. 
     