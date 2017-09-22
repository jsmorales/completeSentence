$(function(){

	//------------------------------------------------------------------------------------
    $("#completeSentence").completeSentence({
    	classColContSentence: "col-xs-12",
    	classColSentence: "col-xs-8",
    	classColWords: "col-xs-4",
		"sentences": [
			{
				"sentence":"1. Esta es la primera frase @input loca.",
				"words": [
					{
						"val": "pega",
						"correct": "true"
					},
					{
						"val": "boli",
						"correct": "false"
					},
					{
						"val": "fuck",
						"correct": "false"
					}
				],
				correct: function(){
					alert("Correcto para 1.!")
				},
				error: function(){
					alert("Incorrecto para 1.!")
				}
			},
			{
				"sentence":"2.Esta es la segunda frase @input bowser.",
				"words": [
					{
						"val": "buen",
						"correct": "false"
					},
					{
						"val": "mal",
						"correct": "true"
					},
					{
						"val": "no se sabe",
						"correct": "false"
					}
				],
				correct: function(){
					alert("Correcto para 2.!")
				},
				error: function(){
					alert("Incorrecto para 2.!")
				}
			},
			{
				"sentence":"3.Darth Vader usa la @input para el mal.",
				"words": [
					{
						"val": "desgracia",
						"correct": "false"
					},
					{
						"val": "maldad",
						"correct": "false"
					},
					{
						"val": "fuerza",
						"correct": "true"
					}
				],
				correct: function(){
					alert("Correcto para 3.!")
				},
				error: function(){
					alert("Incorrecto para 3.!")
				}
			}

		],
		start: function(){
			console.log("Comienzo desde consola!")
		}
	});
    //------------------------------------------------------------------------------------
})