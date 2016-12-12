require 'rails_helper'

RSpec.feature "Welcomes", type: :feature, js: true do


	describe 'a guest user' do		
		before(:each) do
	    visit root_path
	  end

		it 'see content on first page' do
			expect(page).to have_content("Data Visualization")
		end
	end

	describe 'has read more button that toggles text' do
		before(:each) do
    	visit root_path
  	end

		it 'clicks on read more button will apn hidden text' do
			find(".read_more").find(".fa-3x").click
			expect(page).to have_content("In August, 2015, I attend my first Hackathon in National Taiwan University, where my interest in computer starts. Learning 3 computer languages, 13 frameworks for web and mobile application development, and 2 test-driven delvelopment, I graduated from Dev Bootcamp in San Francisco during my gap year. Attending big and small competition, I persue my interest in programing and develop my skills in web and mobile development. With my talent in web and mobile application development, my motivation to keep improving is to produce tools that enhance the quality of lives.")
		end

		it 'collapse intro when click on read more button twice' do
			find(".read_more").find(".fa-3x").click
			find(".read_more").find(".fa-3x").click
			expect(page).to have_no_content("In August, 2015, I attend my first Hackathon in National Taiwan University, where my interest in computer starts. Learning 3 computer languages, 13 frameworks for web and mobile application development, and 2 test-driven delvelopment, I graduated from Dev Bootcamp in San Francisco during my gap year. Attending big and small competition, I persue my interest in programing and develop my skills in web and mobile development. With my talent in web and mobile application development, my motivation to keep improving is to produce tools that enhance the quality of lives.")
		end

	end

	describe 'links in the page that do not redirect' do 
		before(:each) do
    	visit root_path
  	end
		
		it 'changes the current image appearing' do
			sleep(5)
			expect(page).to have_content '"Do. Or do not. There is no try." - Yoda, Jedi Master.'
		end

		it 'popup resume modal' do
			first(:link, "Resume").click
			expect(page).to have_xpath("//img[@src='resume.png']")
		end
		
		it 'scroll back to the top when clicking on toTop button' do
			find(".go_top").click
			page.should visit("#top")
			# not sure if visit can be use like this, test passes no matter is("#top") or ("#bottom")
			# if this test is placed in front of any test, the followed test fails... 
		end


	end

	describe 'links in page that redirects' do
		before(:each) do
    	visit root_path
  	end

		it 'has link to developer' do 
			page.has_xpath?("/developer")
		end

		it 'has link to entrepreneur' do 
			page.has_xpath?("/entrepreneur")
		end

		it 'has link to athlete' do 
			page.has_xpath?("/athlete")
		end

		it 'has link to about' do
			page.has_xpath?("/about")
		end

		it 'has link to github' do
			page.has_xpath?("//github.com/Hank860502")
		end

		it 'has link to linkedin' do
			page.has_xpath?("//linkedin.com/in/hank860502")
		end

		it 'has link to instagram' do
			page.has_xpath?("//instagram.com/hank0502")
		end
		# no facebook test

	end
end
