require 'rails_helper'

RSpec.feature "Welcomes", type: :feature, js: true do
	context 'a guest user' do
		it 'can see the page title' do
			visit root_path
		end
	end
end
