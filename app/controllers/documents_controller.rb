class DocumentsController < ApplicationController

  def index
    @documentz = Document.all
    respond_to do |format|
        format.json {render :json => @documentz }
    end
    #render :json => Document.all
  end

  def show
    @document = Document.find(params[:id])
    respond_to do |format|
        format.json {render :json => @document }
    end
    #render :json => Document.find(params[:id])
  end

  def create
    #@document = Document.create(params)  
    document = Document.create! params
    render :json => document
  end

  def update
    document = Document.find(params[:id])
    document.update_attributes! params
    render :json => document
  end
end
