		
		//TELA PLAY
		const screen_play = Id("screen-play");
		const button_play = Id("button-play");
		
		//TELA MENU
		const screen_menu = Id("screen-menu");
		const button_game_combat_mode = Id("button-game-combat-mode");
		const button_game_guessed_mode = Id("button-game-guessed-mode");
		
		//TELA JOGO MODO COMBATE
		const screen_combat_game = Id("screen-combat-game");
		const button_exit_combat_game = Id("button-exit-combat-game");
		const p_combat_game_victory = Id("p-combat-game-victory");
		const p_combat_game_defeat = Id("p-combat-game-defeat");
		const p_life_combat_game_esquire_red = Id("p-life-combat-game-esquire-red");
		const p_life_combat_game_esquire_blue = Id("p-life-combat-game-esquire-blue");
		const img_esquire_red = Id("img-esquire-red");
		const img_esquire_blue = Id("img-esquire-blue");
		const sub_notificacion_situacion_round_combat_game = Id("sub-notificacion-situacion-round-combat-game");
		const button_combat_game_attack = Id("button-combat-game-attack");
		const button_combat_game_defense = Id("button-combat-game-defense");
		const button_combat_game_idle = Id("button-combat-game-idle");
		const buttons_combat_game_continue_exit = Id("buttons-combat-game-continue-exit");
		const button_combat_game_continue = Id("button-combat-game-continue");
		const button_combat_game_exit = Id("button-combat-game-exit");
		
		const img_esquire_red_src_attack = "src/screen-combat-game/img/esquire_red/attack.png";
		const img_esquire_red_src_defende = "src/screen-combat-game/img/esquire_red/defende.png";
		const img_esquire_red_src_idle = "src/screen-combat-game/img/esquire_red/idle.png";
		const img_esquire_red_src_attacked = "src/screen-combat-game/img/esquire_red/attacked.png";
		const img_esquire_red_src_divert = "src/screen-combat-game/img/esquire_red/divert.png";
		const img_esquire_red_src_defeat = "src/screen-combat-game/img/esquire_red/defeat.png";
		const img_esquire_red_src_victory = "src/screen-combat-game/img/esquire_red/victory.png";
		
		const img_esquire_blue_src_attack = "src/screen-combat-game/img/esquire_blue/attack.png";
		const img_esquire_blue_src_defende = "src/screen-combat-game/img/esquire_blue/defende.png";
		const img_esquire_blue_src_idle = "src/screen-combat-game/img/esquire_blue/idle.png";
		const img_esquire_blue_src_attacked = "src/screen-combat-game/img/esquire_blue/attacked.png";
		const img_esquire_blue_src_divert = "src/screen-combat-game/img/esquire_blue/divert.png";
		const img_esquire_blue_src_defeat = "src/screen-combat-game/img/esquire_blue/defeat.png";
		const img_esquire_blue_src_victory = "src/screen-combat-game/img/esquire_blue/victory.png";
		
		const array_action_esquire_blue = ["attack","defende","idle"];
		
		let quantity_victories_combat_game = 0;
		let quantity_defeats_combat_game = 0;
		let life_esquire_red = 6;
		let life_esquire_blue = 6;
		
		let highscore_combat_game = 0;
		let score_combat_game = 0;
		let level_hero;
		
		//TELA TABELA MODO COMBATE
		const screen_table_combat_game = Id("screen-table-combat-game");
		const p_details_rounds_combat_game = Id("p-details-rounds-combat-game");
		const p_score_combat_game = Id("p-score-combat-game");
		const p_level_message_combat_game = Id("p-level-message-combat-game");
		const table_combat_game = Id("table-combat-game");
		const select_tr_table_combat_game = table_combat_game.querySelectorAll("tr");
		const p_highscore_combat_game = Id("p-highscore-combat-game");
		const button_play_again_combat_game = Id("button-play-again-combat-game");
		const button_menu_combat_game = Id("button-menu-combat-game");
		
		//TELA JOGO MODO ADIVINHOU
		const screen_guessed_game = Id("screen-guessed-game");
		const button_exit_guessed_game = Id("button-exit-guessed-game");
		const p_guessed_game_victory = Id("p-guessed-game-victory");
		const p_guessed_game_defeat = Id("p-guessed-game-defeat");
		const img_pirate_red = Id("img-pirate-red");
		const img_pirate_blue = Id("img-pirate-blue");
		const sub_notificacion_situacion_round_guessed_game = Id("sub-notificacion-situacion-round-guessed-game");
		const button_guessed_game_attack = Id("button-guessed-game-attack");
		const button_guessed_game_defense = Id("button-guessed-game-defense");
		const button_guessed_game_idle = Id("button-guessed-game-idle");
		const buttons_guessed_game_terminate = Id("buttons-guessed-game-terminate");
		const button_guessed_game_terminate = Id("button-guessed-game-terminate");
		
		const img_pirate_red_src_attack = "src/screen-guessed-game/img/pirate_red/attack.png";
		const img_pirate_red_src_defende = "src/screen-guessed-game/img/pirate_red/defende.png";
		const img_pirate_red_src_idle = "src/screen-guessed-game/img/pirate_red/idle.png";
		
		const img_pirate_blue_src_attack = "src/screen-guessed-game/img/pirate_blue/attack.png";
		const img_pirate_blue_src_defende = "src/screen-guessed-game/img/pirate_blue/defende.png";
		const img_pirate_blue_src_idle = "src/screen-guessed-game/img/pirate_blue/idle.png";
		
		const array_action_pirate_blue = ["attack","defende","idle"];
		
		let quantity_victories_guessed_game = 0;
		let quantity_defeats_guessed_game = 0;
		
		let highscore_guessed_game = 0;
		let score_guessed_game = 0;
		
		//TELA TABELA MODO ADIVINHOU
		const screen_table_guessed_game = Id("screen-table-guessed-game");
		const p_details_rounds_guessed_game = Id("p-details-rounds-guessed-game");
		const p_score_guessed_game = Id("p-score-guessed-game");
		const p_level_message_guessed_game = Id("p-level-message-guessed-game");
		const table_guessed_game = Id("table-guessed-game");
		const select_tr_table_guessed_game = table_guessed_game.querySelectorAll("tr");
		const p_highscore_guessed_game = Id("p-highscore-guessed-game");
		const button_play_again_guessed_game = Id("button-play-again-guessed-game");
		const button_menu_guessed_game = Id("button-menu-guessed-game");
		
		
		/*                                                                                                                                        */
		///Tela Play
		
		//Ir Para Tela Menu Inicial
		button_play.addEventListener("click", ()=>{
			
			Change_Scene_Style_Display(screen_menu,"flex", screen_play);
			
		});
		
		//Eventos de Teclado
		window.addEventListener("keydown", (t) => {
			
			if (window.getComputedStyle(screen_play).display === "grid")
			{
				
				let tcl = t.keyCode;
				
				//Enter - ir para tela menu inicial
				if (tcl ==  13)
				{
					
					Change_Scene_Style_Display(screen_menu,"flex", screen_play);
					
				}
				
			}
			
		});
		
		
		
		/*                                                                                                                                        */
		
		/*                                                                                                                                        */
		///Tela Menu
		
		//ir para tela de jogo modo combate
		button_game_combat_mode.addEventListener("click", ()=>{
			
			Change_Scene_Style_Display(screen_combat_game,"flex", screen_menu);
			
		});
		
		//ir para tela de jogo modo adivinhou
		button_game_guessed_mode.addEventListener("click", ()=>{
			
			Change_Scene_Style_Display(screen_guessed_game,"flex", screen_menu);
			
		});
		
		//Eventos de Teclado
		window.addEventListener("keydown", (t) => {
			
			if (screen_menu.style.display === "flex")
			{
				
				let tcl = t.keyCode;
				
				//tecla seta left - ir para tela jogo combate
				if (tcl == 37)
				{
					
					Change_Scene_Style_Display(screen_combat_game,"flex", screen_menu);
					
				}
				
				//tecla seta right - ir para tela jogo combate
				if (tcl == 39)
				{
					
					Change_Scene_Style_Display(screen_guessed_game,"flex", screen_menu);
					
				}
				
			}
			
		});
		
		/*                                                                                                                                        */
		
		/*                                                                                                                                        */
		///Tela Jogo Modo Combate
		
		//voltar para menu
		button_exit_combat_game.addEventListener("click", ()=>{
			
			Change_Scene_Style_Display(screen_menu,"flex", screen_combat_game);
			
		});
		
		//Eventos de Decisão do jogador com o player
		//Eventos de Mouse
		
		//Atacar
		button_combat_game_attack.addEventListener("click", ()=> {
			
			img_esquire_red.src = img_esquire_red_src_attack;
			
			let get_action_esquire_blue = Aleatory_Item_Array(array_action_esquire_blue);
			
			if (get_action_esquire_blue === "attack")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_attack;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Ataque🏆";
				
				let raffle_attack = Aleatory_Number_Interval(0,5);
				
				if (raffle_attack === 1)
				{
					
					let raffle_damage = Aleatory_Number_Interval(0,2);
					let how_lose;
					
					if (raffle_damage === 0)
					{
						
						how_lose = 1;
						
					}
					else if (raffle_damage === 1)
					{
						
						how_lose = 2;
						
					}
					else if (raffle_damage === 2)
					{
						
						how_lose = 3;
						
					}
					
					img_esquire_red.src = img_esquire_red_src_attacked;
					
					sub_notificacion_situacion_round_combat_game.innerText = "Ataque|Ataque🏆";
					
					life_esquire_red = life_esquire_red - how_lose;
					Status_Life_Combat_Game();
					
				}
				
				if (raffle_attack === 2)
				{
					
					sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Ataque";
					
					life_esquire_blue = life_esquire_blue - 1;
					Status_Life_Combat_Game();
					
				}
				
			}
			else if (get_action_esquire_blue === "defende")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_defende;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Defesa";
				
				if (Aleatory_Number_Interval(0,1) === 1)
				{
					
					life_esquire_blue = life_esquire_blue - 1;
					Status_Life_Combat_Game();
					
				}
				
			}
			else if (get_action_esquire_blue === "idle")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_idle;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Parado";
				
				life_esquire_blue = life_esquire_blue - 2;
				
				Status_Life_Combat_Game();
				
			}
			
		});
		
		//Defende
		button_combat_game_defense.addEventListener("click", ()=> {
			
			img_esquire_red.src = img_esquire_red_src_defende;
			
			let get_action_esquire_blue = Aleatory_Item_Array(array_action_esquire_blue);
			
			if (get_action_esquire_blue === "attack")
			{
				
				
				
				img_esquire_blue.src = img_esquire_blue_src_attack;
				
				sub_notificacion_situacion_round_combat_game.innerText = "Defesa|Ataque🏆";
				
				if (Aleatory_Number_Interval(0,1) === 0)
				{
					
					img_esquire_red.src = img_esquire_red_src_attacked;
					life_esquire_red = life_esquire_red - 1;
					
				}
				else
				{
					
					img_esquire_red.src = img_esquire_red_src_divert;
					
				}
				
				Status_Life_Combat_Game();
				
			}
			else if (get_action_esquire_blue === "defende")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_defende;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Defesa|Defesa🏆";
				
				++quantity_victories_combat_game;
				
				p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
				
			}
			else if (get_action_esquire_blue === "idle")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_idle;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Defesa|Parado🏆";
				
				
			}
			
		});
		
		//Sem Ação
		button_combat_game_idle.addEventListener("click", ()=> {
			
			img_esquire_red.src = img_esquire_red_src_idle;
			
			let get_action_esquire_blue = Aleatory_Item_Array(array_action_esquire_blue);
			
			if (get_action_esquire_blue === "attack")
			{
				img_esquire_red.src = img_esquire_red_src_attacked;
				
				img_esquire_blue.src = img_esquire_blue_src_attack;
				
				sub_notificacion_situacion_round_combat_game.innerText = "Parado|Ataque🏆";
				
				life_esquire_red = life_esquire_red - 2;
				Status_Life_Combat_Game();
				
			}
			else if (get_action_esquire_blue === "defende")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_defende;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Parado|Defesa🏆";
				
				
			}
			else if (get_action_esquire_blue === "idle")
			{
				
				img_esquire_blue.src = img_esquire_blue_src_idle;
				
				sub_notificacion_situacion_round_combat_game.innerText = "🏆Parado|Parado🏆";
				
				quantity_victories_combat_game += 2;
				
				p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
				
				
			}
			
		});
		
		// Continuar?
		button_combat_game_continue.addEventListener("click", ()=>{
			
			if ((life_esquire_red <= 0) || (life_esquire_blue <= 0))
			{
				if (life_esquire_blue <= 0) {
					
					life_esquire_blue = 6;
					
					p_life_combat_game_esquire_blue.innerText = "❤️❤️❤️";
					
				}
				
				if (life_esquire_red <= 0)
				{
					
					life_esquire_red = 6;
					
					p_life_combat_game_esquire_red.innerText = "❤️❤️❤️";
					
				}
				
				img_esquire_red.src = img_esquire_red_src_idle;
				img_esquire_blue.src = img_esquire_blue_src_idle;
				
				sub_notificacion_situacion_round_combat_game.innerText = "Round";
				
				button_combat_game_attack.disabled = false;
				button_combat_game_defense.disabled = false;
				button_combat_game_idle.disabled = false;
				
				buttons_combat_game_continue_exit.style.visibility = "hidden";
				
			}
			
		});
		
		// Sair para Tabela de Pontuação
		button_combat_game_exit.addEventListener("click", ()=>{
			
			Change_Scene_Style_Display(screen_table_combat_game,"flex", screen_combat_game);
			
			life_esquire_red = 6;
			life_esquire_blue = 6;
			
			p_life_combat_game_esquire_red.innerText = "❤️❤️❤️";
			p_life_combat_game_esquire_blue.innerText = "❤️❤️❤️";
			
			img_esquire_red.src = img_esquire_red_src_idle;
			img_esquire_blue.src = img_esquire_blue_src_idle;
			
			sub_notificacion_situacion_round_combat_game.innerText = "Round";
			
			button_combat_game_attack.disabled = false;
			button_combat_game_defense.disabled = false;
			button_combat_game_idle.disabled = false;
			
			buttons_combat_game_continue_exit.style.visibility = "hidden";
			
			score_combat_game = (quantity_victories_combat_game - quantity_defeats_combat_game);
			
			if (highscore_combat_game <= score_combat_game)
			{
				
				highscore_combat_game = score_combat_game;
				
			}
			
			p_details_rounds_combat_game.innerText = "Você tem " + quantity_victories_combat_game + " Vitórias e " + quantity_defeats_combat_game + " Derrotas";
			p_score_combat_game.innerText = "Seu Saldo de Vitórias é de " + score_combat_game;
			
			Return_Level_Hero(score_combat_game);
			
			p_level_message_combat_game.innerText = "O Herói tem de saldo de " + score_combat_game + " está no nível de " + level_hero;
			
			Indicate_LeveL_Hero_in_Table(select_tr_table_combat_game, highscore_combat_game, score_combat_game);
			
			p_highscore_combat_game.innerText = "Sua Maior Pontução: " + highscore_combat_game;
			
		});
		
		//Eventos de Teclado
		window.addEventListener("keydown", (t) => {
			
			if (screen_combat_game.style.display === "flex")
			{
				
				let tcl = t.keyCode;
				
				//tecla a - atacar
				if (tcl ==  65)
				{
					if (window.getComputedStyle(buttons_combat_game_continue_exit).visibility === "hidden")
					{
						
						img_esquire_red.src = img_esquire_red_src_attack;
						
						let get_action_esquire_blue = Aleatory_Item_Array(array_action_esquire_blue);
						
						if (get_action_esquire_blue === "attack")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_attack;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Ataque🏆";
							
							let raffle_attack = Aleatory_Number_Interval(0,5);
							
							if (raffle_attack === 1)
							{
								
								let raffle_damage = Aleatory_Number_Interval(0,2);
								let how_lose;
								
								if (raffle_damage === 0)
								{
									
									how_lose = 1;
									
								}
								else if (raffle_damage === 1)
								{
									
									how_lose = 2;
									
								}
								else if (raffle_damage === 2)
								{
									
									how_lose = 3;
									
								}
								
								img_esquire_red.src = img_esquire_red_src_attacked;
								
								sub_notificacion_situacion_round_combat_game.innerText = "Ataque|Ataque🏆";
								
								life_esquire_red = life_esquire_red - how_lose;
								Status_Life_Combat_Game();
								
							}
							
							if (raffle_attack === 2)
							{
								
								sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Ataque";
								
								life_esquire_blue = life_esquire_blue - 1;
								Status_Life_Combat_Game();
								
							}
							
						}
						else if (get_action_esquire_blue === "defende")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_defende;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Defesa";
							
							if (Aleatory_Number_Interval(0,1) === 1)
							{
								
								life_esquire_blue = life_esquire_blue - 1;
								Status_Life_Combat_Game();
								
							}
							
						}
						else if (get_action_esquire_blue === "idle")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_idle;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Ataque|Parado";
							
							life_esquire_blue = life_esquire_blue - 2;
							
							Status_Life_Combat_Game();
							
						}
						
					}
					
				}
				
				//tecla s - defender
				if (tcl ==  83)
				{
					if (window.getComputedStyle(buttons_combat_game_continue_exit).visibility === "hidden")
					{
						img_esquire_red.src = img_esquire_red_src_defende;
						
						let get_action_esquire_blue = Aleatory_Item_Array(array_action_esquire_blue);
						
						if (get_action_esquire_blue === "attack")
						{
							
							
							
							img_esquire_blue.src = img_esquire_blue_src_attack;
							
							sub_notificacion_situacion_round_combat_game.innerText = "Defesa|Ataque🏆";
							
							if (Aleatory_Number_Interval(0,1) === 0)
							{
								
								img_esquire_red.src = img_esquire_red_src_attacked;
								life_esquire_red = life_esquire_red - 1;
								
							}
							else
							{
								
								img_esquire_red.src = img_esquire_red_src_divert;
								
							}
							
							Status_Life_Combat_Game();
							
						}
						else if (get_action_esquire_blue === "defende")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_defende;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Defesa|Defesa🏆";
							
							++quantity_victories_combat_game;
							
							p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
							
						}
						else if (get_action_esquire_blue === "idle")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_idle;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Defesa|Parado🏆";
							
							
						}
						
					}
					
				}
				
				//tecla d - sem ação
				if (tcl ==  68)
				{
					if (window.getComputedStyle(buttons_combat_game_continue_exit).visibility === "hidden")
					{
						img_esquire_red.src = img_esquire_red_src_idle;
						
						let get_action_esquire_blue = Aleatory_Item_Array(array_action_esquire_blue);
						
						if (get_action_esquire_blue === "attack")
						{
							img_esquire_red.src = img_esquire_red_src_attacked;
							
							img_esquire_blue.src = img_esquire_blue_src_attack;
							
							sub_notificacion_situacion_round_combat_game.innerText = "Parado|Ataque🏆";
							
							life_esquire_red = life_esquire_red - 2;
							Status_Life_Combat_Game();
							
						}
						else if (get_action_esquire_blue === "defende")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_defende;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Parado|Defesa🏆";
							
							
						}
						else if (get_action_esquire_blue === "idle")
						{
							
							img_esquire_blue.src = img_esquire_blue_src_idle;
							
							sub_notificacion_situacion_round_combat_game.innerText = "🏆Parado|Parado🏆";
							
							quantity_victories_combat_game += 2;
							
							p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
							
							
						}
						
					}
					
				}
				
				if (window.getComputedStyle(buttons_combat_game_continue_exit).visibility === "hidden")
				{
					
					//Escape
					if (tcl ==  27)
					{
						
							
							Change_Scene_Style_Display(screen_menu,"flex", screen_combat_game);
							
						
					}
					
				}
				else
				{
					
					//Enter
					if (tcl ==  13)
					{
						
						if (((life_esquire_red <= 0) || (life_esquire_blue <= 0)) && ((document.activeElement != button_exit_combat_game) && (document.activeElement != button_combat_game_exit)))
						{
							if ((life_esquire_red <= 0) || (life_esquire_blue <= 0))
							{
								if (life_esquire_blue <= 0) {
									
									life_esquire_blue = 6;
									
									p_life_combat_game_esquire_blue.innerText = "❤️❤️❤️";
									
								}
								
								if (life_esquire_red <= 0)
								{
									
									life_esquire_red = 6;
									
									p_life_combat_game_esquire_red.innerText = "❤️❤️❤️";
									
								}
								
								img_esquire_red.src = img_esquire_red_src_idle;
								img_esquire_blue.src = img_esquire_blue_src_idle;
								
								sub_notificacion_situacion_round_combat_game.innerText = "Round";
								
								button_combat_game_attack.disabled = false;
								button_combat_game_defense.disabled = false;
								button_combat_game_idle.disabled = false;
								
								buttons_combat_game_continue_exit.style.visibility = "hidden";
								
							}
							
						}
						
					}
					
					//Escape
					if (tcl ==  27)
					{
						
						Change_Scene_Style_Display(screen_table_combat_game,"flex", screen_combat_game);
						
						life_esquire_red = 6;
						life_esquire_blue = 6;
						
						p_life_combat_game_esquire_red.innerText = "❤️❤️❤️";
						p_life_combat_game_esquire_blue.innerText = "❤️❤️❤️";
						
						img_esquire_red.src = img_esquire_red_src_idle;
						img_esquire_blue.src = img_esquire_blue_src_idle;
						
						sub_notificacion_situacion_round_combat_game.innerText = "Round";
						
						button_combat_game_attack.disabled = false;
						button_combat_game_defense.disabled = false;
						button_combat_game_idle.disabled = false;
						
						buttons_combat_game_continue_exit.style.visibility = "hidden";
						
						score_combat_game = (quantity_victories_combat_game - quantity_defeats_combat_game);
						
						if (highscore_combat_game <= score_combat_game)
						{
							
							highscore_combat_game = score_combat_game;
							
						}
						
						p_details_rounds_combat_game.innerText = "Você tem " + quantity_victories_combat_game + " Vitórias e " + quantity_defeats_combat_game + " Derrotas";
						p_score_combat_game.innerText = "Seu Saldo de Vitórias é de " + score_combat_game;
						
						Return_Level_Hero(score_combat_game);
						
						p_level_message_combat_game.innerText = "O Herói tem de saldo de " + score_combat_game + " está no nível de " + level_hero;
						
						Indicate_LeveL_Hero_in_Table(select_tr_table_combat_game, highscore_combat_game, score_combat_game);
						
						p_highscore_combat_game.innerText = "Sua Maior Pontução: " + highscore_combat_game;
						
					}
					
				}
				
			}
			
		});
		
		
		//Função Para Verificar Vida do Jogador
		function Status_Life_Combat_Game ()
		{
			
			if (life_esquire_red === 6)
			{
				
				if (p_life_combat_game_esquire_red.innerText === "❤️❤️❤️")
				{
					
					p_life_combat_game_esquire_red.innerText = "❤️❤️❤️"
					
				}
				
			}
			
			
			if (life_esquire_red === 6)
			{
				
				p_life_combat_game_esquire_red.innerText = "❤️❤️❤️";
				
			}
			else if (life_esquire_red === 5)
			{
				
				p_life_combat_game_esquire_red.innerText = "❤️❤️💔";
				
			}
			else if (life_esquire_red === 4)
			{
				
				p_life_combat_game_esquire_red.innerText = "❤️❤️";
				
			}
			else if (life_esquire_red === 3)
			{
				
				p_life_combat_game_esquire_red.innerText = "❤️💔";
				
			}
			else if (life_esquire_red === 2)
			{
				
				p_life_combat_game_esquire_red.innerText = "❤️";
				
			}
			else if (life_esquire_red === 1)
			{
				
				p_life_combat_game_esquire_red.innerText = "💔";
				
			}
			else if (life_esquire_red <= 0)
			{
				
				++quantity_defeats_combat_game;
				
				p_combat_game_defeat.innerText = "Derrotas: " + quantity_defeats_combat_game;
				
				p_life_combat_game_esquire_red.innerText = "";
				
				img_esquire_red.src = img_esquire_red_src_defeat;
				img_esquire_blue.src = img_esquire_blue_src_victory;
				
				sub_notificacion_situacion_round_combat_game.innerText = "Perdeu Esse Round 😵";
				
				button_combat_game_attack.disabled = true;
				button_combat_game_defense.disabled = true;
				button_combat_game_idle.disabled = true;
				
				buttons_combat_game_continue_exit.style.visibility = "initial";
				
			}
			
			if (life_esquire_blue === 6)
			{
				
				p_life_combat_game_esquire_blue.innerText = "❤️❤️❤️";
				
			}
			else if (life_esquire_blue === 5)
			{
				
				p_life_combat_game_esquire_blue.innerText = "❤️❤️💔";
				
			}
			else if (life_esquire_blue === 4)
			{
				
				p_life_combat_game_esquire_blue.innerText = "❤️❤️";
				
			}
			else if (life_esquire_blue === 3)
			{
				
				p_life_combat_game_esquire_blue.innerText = "❤️💔";
				
			}
			else if (life_esquire_blue === 2)
			{
				
				p_life_combat_game_esquire_blue.innerText = "❤️";
				
			}
			else if (life_esquire_blue === 1)
			{
				
				p_life_combat_game_esquire_blue.innerText = "💔";
				
			}
			else if (life_esquire_blue <= 0)
			{
				
				++quantity_victories_combat_game;
				
				p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
				
				p_life_combat_game_esquire_blue.innerText = "";
				
				img_esquire_red.src = img_esquire_red_src_victory;
				img_esquire_blue.src = img_esquire_blue_src_defeat;
				
				sub_notificacion_situacion_round_combat_game.innerText = "Venceu Esse Round 🏆";
				
				button_combat_game_attack.disabled = true;
				button_combat_game_defense.disabled = true;
				button_combat_game_idle.disabled = true;
				
				buttons_combat_game_continue_exit.style.visibility = "initial";
				
			}
			
		}
		
		/*                                                                                                                                        */
		
		
		/*                                                                                                                                        */
		///Tela Tabela Modo Combate
		
		//Jogar Novamente o Modo Combate
		button_play_again_combat_game.addEventListener ("click", ()=>{
			
			Change_Scene_Style_Display(screen_combat_game,"flex", screen_table_combat_game);
			
			quantity_victories_combat_game = 0;
			quantity_defeats_combat_game = 0;
			
			life_esquire_red = 6;
			life_esquire_blue = 6;
			
			p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
			p_combat_game_defeat.innerText = "Derrotas: " + quantity_defeats_combat_game;
			
			p_life_combat_game_esquire_red.innerText = "❤️❤️❤️";
			p_life_combat_game_esquire_blue.innerText = "❤️❤️❤️";
			
			img_esquire_red.src = img_esquire_red_src_idle;
			img_esquire_blue.src = img_esquire_blue_src_idle;
			
			sub_notificacion_situacion_round_combat_game.innerText = "Round";
			
			button_combat_game_attack.disabled = false;
			button_combat_game_defense.disabled = false;
			button_combat_game_idle.disabled = false;
			
			for (let t = 1; t < select_tr_table_combat_game.length; t++)
			{
				
				select_tr_table_combat_game[t].style.backgroundColor = "transparent";
				
			}
			
		});
		
		//Ir Para Menu Inicial
		button_menu_combat_game.addEventListener ("click", ()=>{
			
			Change_Scene_Style_Display(screen_menu,"flex", screen_table_combat_game);
			
			quantity_victories_combat_game = 0;
			quantity_defeats_combat_game = 0;
			
			p_combat_game_victory.innerText = "Vitórias: " + quantity_victories_combat_game;
			p_combat_game_defeat.innerText = "Derrotas: " + quantity_defeats_combat_game;
			
			for (let t = 1; t < select_tr_table_combat_game.length; t++)
			{
				
				select_tr_table_combat_game[t].style.backgroundColor = "transparent";
				
			}
			
		});
		
		/*                                                                                                                                        */
		///Tela Jogo Modo Adivinhou
		
		//voltar para menu
		button_exit_guessed_game.addEventListener("click", ()=>{
			
			Change_Scene_Style_Display(screen_menu,"flex", screen_guessed_game);
			
		});
		
		//Eventos de Decisão do jogador com o player
		//Eventos de Mouse
		
		//Atacar
		button_guessed_game_attack.addEventListener("click", ()=>{
			
			img_pirate_red.src = img_pirate_red_src_attack;
			
			Lottery_Round_Pirate("attack");
			
		});
		
		//Defesa
		button_guessed_game_defense.addEventListener("click", ()=>{
			
			img_pirate_red.src = img_pirate_red_src_defende;
			
			Lottery_Round_Pirate("defende");
			
		});
		
		//Parado
		button_guessed_game_idle.addEventListener("click", ()=>{
			
			img_pirate_red.src = img_pirate_red_src_idle;
			
			Lottery_Round_Pirate("idle");
			
		});
		
		// Sair para Tabela de Pontuação
		button_guessed_game_terminate.addEventListener("click", ()=>{
			
			Clear_Guessed_Mode_Go_Screen_Tabela_Guessed();
			
		});
		
		//Eventos de Teclado
		window.addEventListener("keydown", (t) => {
			
			if (screen_guessed_game.style.display === "flex")
			{
				
				let tcl = t.keyCode;
				
				//tecla a - atacar
				if (tcl ==  65)
				{
					
					img_pirate_red.src = img_pirate_red_src_attack;
					
					Lottery_Round_Pirate("attack");
					
				}
				
				//tecla s - defesa
				if (tcl ==  83)
				{
					
					img_pirate_red.src = img_pirate_red_src_defende;
					
					Lottery_Round_Pirate("defende");
					
				}
				
				//tecla d - parado
				if (tcl ==  68)
				{
					
					img_pirate_red.src = img_pirate_red_src_idle;
					
					Lottery_Round_Pirate("idle");
					
				}
				
				//Escape - sair menu
				if (tcl ==  27)
				{
					
					Change_Scene_Style_Display(screen_menu,"flex", screen_guessed_game);
					
				}
				
				if ((document.activeElement != button_exit_guessed_game) && (document.activeElement != button_guessed_game_attack) && (document.activeElement != button_guessed_game_defense) && (document.activeElement != button_guessed_game_idle))
				{
					
					//Enter - encerrar rodada
					if (tcl ==  13)
					{
						
						Clear_Guessed_Mode_Go_Screen_Tabela_Guessed();
						
					}
					
					
				}
				
			}
			
		});
		
		
		//Sortear Ação do Pirata Azul, Comparar Com o Pirata Vermelho e Pontuar Entre Vitória e Derrota
		function Lottery_Round_Pirate(action)
		{
			
			let get_action_pirate_blue = Aleatory_Item_Array(array_action_pirate_blue);
			
			if (get_action_pirate_blue === "attack")
			{
				
				img_pirate_blue.src = img_pirate_blue_src_attack;
				
				if (action === "attack")
				{
					
					++quantity_victories_guessed_game;
					
					p_guessed_game_victory.innerText = "Vitorias: " + quantity_victories_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "🏆Ataque|Ataque";
					
				}
				else if (action === "defende")
				{
					
					++quantity_defeats_guessed_game;
					
					p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "Defesa|Ataque🏆";
					
				}
				else if (action === "idle")
				{
					
					++quantity_defeats_guessed_game;
					
					p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "Parado|Ataque🏆";
					
				}
				
			}
			else if (get_action_pirate_blue === "defende")
			{
				
				img_pirate_blue.src = img_pirate_blue_src_defende;
				
				if (action === "attack")
				{
					
					++quantity_defeats_guessed_game;
					
					p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "Ataque|Defesa🏆";
					
				}
				else if (action === "defende")
				{
					
					++quantity_victories_guessed_game;
					
					p_guessed_game_victory.innerText = "Vitorias: " + quantity_victories_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "🏆Defesa|Defesa";
					
				}
				else if (action === "idle")
				{
					
					++quantity_defeats_guessed_game;
					
					p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "Parado|Defesa🏆";
					
				}
				
			}
			else if (get_action_pirate_blue === "idle")
			{
				
				img_pirate_blue.src = img_pirate_blue_src_idle;
				
				if (action === "attack")
				{
					
					++quantity_defeats_guessed_game;
					
					p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "Ataque|Parado🏆";
					
				}
				else if (action === "defende")
				{
					
					++quantity_defeats_guessed_game;
					
					p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "Defesa|Parado🏆";
					
				}
				else if (action === "idle")
				{
					
					++quantity_victories_guessed_game;
					
					p_guessed_game_victory.innerText = "Vitorias: " + quantity_victories_guessed_game;
					
					sub_notificacion_situacion_round_guessed_game.innerText = "🏆Parado|Parado";
					
				}
				
			}
		}
		
		
		//Passar Informações Para Tela Tabela Jogo Adivinhou, Limpar/Restaurar Tela Jogo Adivinhou
		function Clear_Guessed_Mode_Go_Screen_Tabela_Guessed ()
		{
			
			Change_Scene_Style_Display(screen_table_guessed_game,"flex", screen_guessed_game);
			
			img_pirate_red.src = img_pirate_red_src_idle;
			img_pirate_blue.src = img_pirate_blue_src_idle;
			
			sub_notificacion_situacion_round_guessed_game.innerText = "Round";
			
			
			score_guessed_game = (quantity_victories_guessed_game - quantity_defeats_guessed_game);
			
			if (highscore_guessed_game <= score_guessed_game)
			{
				
				highscore_guessed_game = score_guessed_game;
				
			}
			
			p_details_rounds_guessed_game.innerText = "Você tem " + quantity_victories_guessed_game + " Vitórias e " + quantity_defeats_guessed_game + " Derrotas";
			p_score_guessed_game.innerText = "Seu Saldo de Vitórias é de " + score_guessed_game;
			
			Return_Level_Hero(score_guessed_game);
			
			p_level_message_guessed_game.innerText = "O Herói tem de saldo de " + score_guessed_game + " está no nível de " + level_hero;
			
			Indicate_LeveL_Hero_in_Table (select_tr_table_guessed_game,highscore_guessed_game,score_guessed_game);
			
			p_highscore_guessed_game.innerText = "Sua Maior Pontução: " + highscore_guessed_game;
			
			
			quantity_victories_guessed_game = 0;
			quantity_defeats_guessed_game = 0;
			
			p_guessed_game_victory.innerText = "Vitórias: " + quantity_victories_guessed_game;
			p_guessed_game_defeat.innerText = "Derrotas: " + quantity_defeats_guessed_game;
			
		}
		
		
		/*                                                                                                                                        */
		///Tela Tabela Modo Adivinhou
		
		//Jogar Novamente o Modo Adivinhou
		button_play_again_guessed_game.addEventListener ("click", ()=>{
			
			Change_Scene_Style_Display(screen_guessed_game,"flex", screen_table_guessed_game);
			
			
			for (let t = 1; t < select_tr_table_combat_game.length; t++)
			{
				
				select_tr_table_combat_game[t].style.backgroundColor = "transparent";
				
			}
			
		});
		
		//Ir Para Menu Inicial
		button_menu_guessed_game.addEventListener ("click", ()=>{
			
			Change_Scene_Style_Display(screen_menu,"flex", screen_table_guessed_game);
			
			
			for (let t = 1; t < select_tr_table_guessed_game.length; t++)
			{
				
				select_tr_table_guessed_game[t].style.backgroundColor = "transparent";
				
			}
			
		});
		
		/*                                                                                                                                        */
		
		
		/*                                                                                                                                        */
		
		//Função Para Retorna o Nível do Herói na variavél level_hero
		function Return_Level_Hero (points_hero)
		{
			
			if (points_hero < 11)
			{
				
				level_hero = "Ferro";
				
			}
			else if (points_hero < 21)
			{
				
				level_hero = "Bronze";
				
			}
			else if (points_hero < 51)
			{
				
				level_hero = "Prata";
				
			}
			else if (points_hero < 81)
			{
				
				level_hero = "Ouro";
				
			}
			else if (points_hero < 91)
			{
				
				level_hero = "Diamante";
				
			}
			else if (points_hero < 101)
			{
				
				level_hero = "Lendário";
				
			}
			else if (points_hero >= 101)
			{
				
				level_hero = "Imortal";
				
			}
			
		}
		
		//Função Para Colorir Linha da Tabela Com a Pontuação mais alta e atual
		function Indicate_LeveL_Hero_in_Table (tabela,highscore,score)
		{
			
			let color_background_line_score_table = "#1C0975";
			let color_background_line_highscore_table = "#038C8C";
			
			if (score < 11)
			{
				
				tabela[1].style.backgroundColor = color_background_line_score_table;
				
			}
			else if (score < 21)
			{
				
				tabela[2].style.backgroundColor = color_background_line_score_table;
				
			}
			else if (score < 51)
			{
				
				tabela[3].style.backgroundColor = color_background_line_score_table;
				
			}
			else if (score < 81)
			{
				
				tabela[4].style.backgroundColor = color_background_line_score_table;
				
			}
			else if (score < 91)
			{
				
				tabela[5].style.backgroundColor = color_background_line_score_table;
				
			}
			else if (score < 101)
			{
				
				tabela[6].style.backgroundColor = color_background_line_score_table;
				
			}
			else if (score >= 101)
			{
				
				tabela[7].style.backgroundColor = color_background_line_score_table;
				
			}
			
			if (highscore < 11)
			{
				
				tabela[1].style.backgroundColor = color_background_line_highscore_table;
				
			}
			else if (highscore < 21)
			{
				
				tabela[2].style.backgroundColor = color_background_line_highscore_table;
				
			}
			else if (highscore < 51)
			{
				
				tabela[3].style.backgroundColor = color_background_line_highscore_table;
				
			}
			else if (highscore < 81)
			{
				
				tabela[4].style.backgroundColor = color_background_line_highscore_table;
				
			}
			else if (highscore < 91)
			{
				
				tabela[5].style.backgroundColor = color_background_line_highscore_table;
				
			}
			else if (highscore < 101)
			{
				
				tabela[6].style.backgroundColor = color_background_line_highscore_table;
				
			}
			else if (highscore >= 101)
			{
				
				tabela[7].style.backgroundColor = color_background_line_highscore_table;
				
			}
			
			if (highscore === score)
			{
				
				color_background_line_table = "#038C8C";
				
			}
			
		}
		
		/*                                                                                                                                        */
	
	
	
	/*                                                                                                                                        */
	///Functions Gerais
	
	// Função para pegar um número aleatório dentro de um intervelo
	function Aleatory_Number_Interval (numero_min, numero_max)
	{
		return Math.floor(Math.random() * (numero_max - numero_min + 1)) + numero_min;
	}
	
	//Função para pegar item aleatório de um array
	function Aleatory_Item_Array (array)
	{
		return array[Math.floor(Math.random() * array.length)];
	}
	
	//Função para misturar array
	function Shuffle_Array(array) {
		
		for (let i = array.length - 1; i > 0; i--)
		{
			
			const j = Math.floor(Math.random() * (i + 1));
			
			[array[i], array[j]] = [array[j], array[i]];
			
		}
		
		return array;
		
	}
	
	//Função para trocar cena mudando o display
	function Change_Scene_Style_Display (cenadesativada,display,cenavisivel)
	{
		
		
		cenadesativada.style.display = display;
		cenavisivel.style.display = "none";
		
	}
	
	//Função para pegar elemento html pelo id
	function Id (identificado) {
		return document.getElementById(identificado);
	};
