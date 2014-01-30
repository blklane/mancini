class HomeController < ApplicationController
	before_filter :authenticate_user!, :only => 'admin'
  def index
  end

  def home
  end

  def floorcovering
  end

  def structural
  end

  def gallery
  end

  def interior
  end

  def admin
  end

  def addgallery
    @project = Project.new
    2.times {@project.images.build}
  end
end
