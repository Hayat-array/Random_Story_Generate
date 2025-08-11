document.getElementById("generatorStory").addEventListener("click",function(){
    let name = document.getElementById("name").value.trim();
    let place = document.getElementById("place").value.trim();
    let object = document.getElementById("object").value.trim();
    let action = document.getElementById("action").value.trim();
    let storyDiv = document.getElementById("story");
    if(name==="" || place==="" ||object==="" || action===""){
        alert("please fill in all the fields")
        return;
    }
//     let stories = [
//     `One day, ${name} went to ${place} and found a mysterious ${object}. Without thinking, ${name} decided to ${action}, and something magical happened!`,
//     `In the heart of ${place}, ${name} discovered a hidden ${object}. As curiosity took over, ${name} started to ${action}, and the adventure began!`,
//     `${name} was walking through ${place} when suddenly a ${object} appeared. Without hesitation, ${name} chose to ${action}, leading to an unforgettable experience!`,
//     `While exploring ${place}, ${name} saw a sparkling ${object}. As soon as they touched it, they were transported to a new world where they had to ${action} to find a way back home!`,
//     `One night at a place ${place}, ${name} found an ancient ${object}. The moment they tried to ${action}, the object began to glow, revealing a hidden secret!`,
//     `At ${place}, ${name} was given a strange ${object} by an old wise person. They were told that if they ${action} at the right moment, something incredible would happen!`,
//     `${name} was cleaning their attic when they stumbled upon an old ${object}. Curious, they decided to ${action}, and suddenly, they were taken on a journey through time.`
// ];
let stories = [

`It had been years since ${name} last set foot near ${place}, but something about this day felt different. The path leading there seemed narrower, overgrown with vines that coiled like watchful serpents. The air carried a faint hum, as though the very ground was vibrating beneath their feet. ${name} rounded a bend and froze — there, resting in a patch of dappled sunlight, was a ${object} unlike anything they had ever seen. Its edges were soft yet sharp, its colors shifting like oil on water.

Drawn forward by a force they couldn’t name, ${name} crouched beside the object. Strange symbols shimmered faintly across its surface, vanishing if they looked too closely. Instinct told them that touching it could change everything, yet their curiosity burned brighter than caution. Slowly, they reached out and decided to ${action}.

The world erupted in color. Sounds warped and bent — bird calls became music, the rustling leaves a chorus. When the light faded, ${name} found themselves standing in a place that could not possibly exist: endless fields of glowing flowers swayed under a violet sky, and rivers of gold carved paths across floating cliffs. Holding the ${object}, ${name} realized this was no accident. The ${object} had chosen them, and somewhere in this strange realm, answers — and dangers — were waiting.`,

`The journey to ${place} had been long and brutal. Storms battered the cliffs, and every step forward felt heavier than the last. But ${name} pressed on, guided by whispers in the wind that spoke of a great discovery. When they finally arrived, the place was nothing like the weathered tales described — it was alive with energy, shadows dancing across the walls like living things.

At the center of the courtyard lay a ${object}, resting upon a stone pedestal. Even from a distance, ${name} felt its pull — a magnet tugging at something deep within their chest. They approached, heartbeat quickening, and without hesitation, chose to ${action}.

What followed was chaos and beauty entwined. A gale roared from the pedestal, lifting ${name} into the air. Images flashed before their eyes: ancient battles, forgotten cities, stars collapsing into light. When their feet touched ground again, they were no longer in ${place} but in a realm untouched by time. Somewhere, far ahead, a path awaited — one they would have to walk alone.`,

`${name} had been warned about ${place} since childhood. The elders spoke of it with the weight of history, claiming it was where the boundary between worlds grew thin. Still, warnings had never stopped ${name} before. And so, on a day when the mist clung low to the ground and the air smelled faintly of rain, they set out.

The forest grew darker the deeper they went, until all light seemed to vanish. That’s when they saw it — a ${object}, resting upon a bed of moss, glowing faintly in the gloom. Every instinct screamed to turn back, but instead, ${name} stepped forward, hands trembling, and decided to ${action}.

The ground split beneath them, and an unseen wind pulled them downward. When they landed, it was in a place bathed in eternal twilight, where the stars hung low and whispered secrets to those who listened. The ${object} still pulsed in their hands, warm and alive, and ${name} knew their fate was now bound to something far greater than themselves.`

];

    let randomStory = stories[Math.floor(Math.random() * stories.length)];
    storyDiv.innerText = randomStory;
    storyDiv.style.display="block";
})