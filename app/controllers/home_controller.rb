class HomeController < ApplicationController
	before_filter :authenticate_user!, :only => 'admin'
  def index
  end

  def home
  end

  # def companyhistory
  #   ### Static Page ###
  # end

  # def outreach
  #   ### Static Page ###
  # end

  # def installers
  #   ### Static Page ###
  # end

  # def floorcovering
  #   ### Static Page ###
  # end

  # def structural
  #   ### Static Page ###
  # end

  # def gallery
  # end

  # def interior
  #   ### Static Page ###
  # end

  def admin
  end

  def interiorgallery
    @projects = Project.where(:product_type => 2)
    @images = @projects.map {|i| i.images}
    render 'gallery'
  end

  def floorgallery
    @projects = Project.where(:product_type => 1)
    @images = @projects.map {|i| i.images}
    render 'gallery'
  end

  def structuralgallery
    @projects = Project.where(:product_type => 3)
    @images = @projects.map {|i| [i.name.downcase.gsub(' ', '_'), i.images]}
    render 'gallery'
  end

  def addgallery
    @project = Project.new
    2.times {@project.images.build}
  end
end
