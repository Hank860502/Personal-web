require 'rails_helper'

RSpec.feature "Welcomes", type: :feature, js: true do
	context 'a guest user' do
		it 'can see the page title' do
			visit root_path
		end
		
		it 'has my three role' do
			visit root_path
			expect(page).to have_content("ＤＥＶＥＬＯＰＥＲ | ＥＮＴＲＥＰＲＥＮＥＵＲ | ＡＴＨＬＥＴＥ")
		end
	end

	context 'has read more button that toggles text' do
		it 'clicks on read more button will apn hidden text' do
			visit root_path
			find(".read_more").find(".fa-3x").click
			expect(page).to have_content("In August, 2015, I attend my first Hackathon in National Taiwan University, where my interest in computer starts. Learning 3 computer languages, 13 frameworks for web and mobile application development, and 2 test-driven delvelopment, I graduated from Dev Bootcamp in San Francisco during my gap year. Attending big and small competition, I persue my interest in programing and develop my skills in web and mobile development. With my talent in web and mobile application development, my motivation to keep improving is to produce tools that enhance the quality of lives.")
		end
		it 'collapse intro when click on read more button twice' do
			visit root_path
			find(".read_more").find(".fa-3x").click
			find(".read_more").find(".fa-3x").click
			expect(page).to have_no_content("In August, 2015, I attend my first Hackathon in National Taiwan University, where my interest in computer starts. Learning 3 computer languages, 13 frameworks for web and mobile application development, and 2 test-driven delvelopment, I graduated from Dev Bootcamp in San Francisco during my gap year. Attending big and small competition, I persue my interest in programing and develop my skills in web and mobile development. With my talent in web and mobile application development, my motivation to keep improving is to produce tools that enhance the quality of lives.")
		end

		it 'scroll back to the top when clicking on toTop button' do
			visit root_path
			find(".go_top").click
			page.should visit("#top")
		end

	end

end
