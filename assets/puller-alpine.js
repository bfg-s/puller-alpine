(()=>{if(!window.Puller)throw"This extension must be initialized after Puller.";if(!window.Alpine)throw"This extension must be initialized after Alpine.";Alpine.magic("now",(function(){return(new Date).toLocaleTimeString()})),window.Puller.channel("alpine",(function(e){var i=e.name,n=e.detail,t=/^([^.]+)\.?([^.]+)?$/.exec(i),l=t?Alpine.store(t[1]):null;t&&t[2]&&l?"function"==typeof l[t[2]]?l[t[2]](n):l[t[2]]=n:t&&l&&("function"==typeof l?l(n):Alpine.store(t[1],n))}))})();