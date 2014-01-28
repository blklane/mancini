class HomeController < ApplicationController
  def index
  	@project = Project.new
  	2.times {@project.images.build}
  end
end
