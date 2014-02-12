class InquiriesController < ApplicationController
	def create
		@inquiry = Inquiry.new(params[:inquiry])

		if @inquiry.save
			ContactMailer.inquiry(@inquiry).deliver
			redirect_to root_path, notice: 'We will contact you within 2 business days.'
		else
			render :action => :new
		end
	end

	def new
		@inquiry = Inquiry.new
	end
end
